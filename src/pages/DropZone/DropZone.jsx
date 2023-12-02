import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { CardContent, Card } from "@/components/ui/card";

export default function DropZone() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg p-12 space-y-4 hover:border-blue-500 transition-all dark:border-gray-600 dark:hover:border-blue-600">
        <IconUpload className="h-12 w-12 text-gray-400 hover:text-blue-500 transition-all dark:text-gray-500 dark:hover:text-blue-500" />
        <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-200">
          Drag & Drop your files here
        </h2>
        <p className="text-gray-500 dark:text-gray-400">or</p>
        <Button variant="outline">Select Files</Button>
      </div>
      <div className="mt-6">
        <Card>
          <CardContent className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Avatar
                alt="File thumbnail"
                size="sm"
                src="/placeholder.svg?width=32&height=32"
              />
              <div>
                <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  filename.ext
                </h3>
                <Badge>Uploading...</Badge>
              </div>
            </div>
            <div className="relative w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700">
              <div
                className="absolute left-0 top-0 h-full bg-blue-500 rounded-full"
                style={{
                  width: "50%",
                }}
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

function IconUpload(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
