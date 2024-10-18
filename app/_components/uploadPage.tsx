"use client";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useState } from "react";

const UploadPage: React.FC = () => {
  const [files, setFiles] = useState<File[]>([]);

  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      // Filter out files that are not images or videos
      const filteredFiles = acceptedFiles.filter(
        (file) =>
          file.type.startsWith("image/") || file.type.startsWith("video/")
      );
      setFiles([...files, ...filteredFiles]);

      // Send each file to the server
      filteredFiles.forEach(async (file) => {
        const formData = new FormData();
        formData.append("username", "Chris");
        formData.append("file", file);

        const formDataObj = Object.fromEntries(formData.entries());
        //console.log(formDataObj);

        try {
          const response = await fetch("http://localhost:3000/api/upload/", {
            method: "POST",
            body: formData,
          });

          if (response.ok) {
            const data = await response.json();
            console.log("File uploaded successfully:", data.filePath);
          } else {
            console.error("File upload failed");
          }
        } catch (error) {
          console.error("Error during upload:", error);
        }
      });
    },
    [files]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
      "video/*": [],
    },
  });

  return (
    <div className="container">
      <h1>Upload Images and Videos</h1>
      <div
        {...getRootProps()}
        style={{
          border: "2px dashed #0070f3",
          padding: "20px",
          textAlign: "center",
          cursor: "pointer",
          width: "50%",
          margin: "40px auto",
        }}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here...</p>
        ) : (
          <p>
            Drag & drop some images or videos here, or click to select files
          </p>
        )}
      </div>

      {files.length > 0 && (
        <div>
          <h2>Uploaded Files</h2>
          <ul>
            {files.map((file, index) => (
              <li key={index}>
                {file.name} ({file.type})
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UploadPage;
