'use client'

import { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Loader2, Upload } from 'lucide-react'

export default function PrescriptionReviewer() {
  const [image, setImage] = useState<File | null>(null)
  const [analysis, setAnalysis] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setImage(acceptedFiles[0])
    setAnalysis(null)
    setError(null)
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'image/*': [] },
    maxFiles: 1,
  })

  const handleSubmit = async () => {
    if (!image) {
      setError('No image selected. Please upload an image first.')
      return
    }

    setIsLoading(true)
    setError(null)

    const formData = new FormData()
    formData.append('image', image)

    try {
      console.log('Sending request to analyze prescription...')
      const response = await fetch('/api/analyze-prescription', {
        method: 'POST',
        body: formData,
      })

      console.log('Response status:', response.status)

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || 'Failed to analyze prescription')
      }

      const data = await response.json()
      console.log('Analysis result:', data)
      setAnalysis(data.analysis)
    } catch (err) {
      console.error('Error in handleSubmit:', err)
      setError(`An error occurred: ${err instanceof Error ? err.message : String(err)}`)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">AI Blood Report Analysis</h1>
      <Card>
        <CardHeader>
          <CardTitle>Upload Blood Report Image</CardTitle>
        </CardHeader>
        <CardContent>
          <div
            {...getRootProps()}
            className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer ${
              isDragActive ? 'border-primary' : 'border-gray-300'
            }`}
          >
            <input {...getInputProps()} />
            {image ? (
              <p>Image selected: {image.name}</p>
            ) : isDragActive ? (
              <p>Drop the image here ...</p>
            ) : (
              <p>Drag and drop a Blood Report image here, or click to select a file</p>
            )}
            <Upload className="mx-auto mt-4" size={24} />
          </div>
          <Button
            className="mt-4 w-full"
            onClick={handleSubmit}
            disabled={!image || isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing...
              </>
            ) : (
              'Analyze Prescription'
            )}
          </Button>
          {error && <p className="text-red-500 mt-4">{error}</p>}
          {analysis && (
            <Card className="mt-4">
              <CardHeader>
                <CardTitle>Analysis Result</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="whitespace-pre-wrap">{analysis.replace(/[*#]/g, ' ').trim()}</p>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  )
}