
import React from 'react';
import { Button } from "@/components/ui/button";
import { FileText, Download } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";

const ResumeButton = () => {
  const handleDownload = () => {
    // In a real implementation, this would link to an actual resume file
    toast({
      title: "Resume Download",
      description: "Your resume download has started.",
      variant: "default",
    });
    
    // Simulate download delay
    setTimeout(() => {
      toast({
        title: "Download Complete",
        description: "Your resume has been downloaded successfully!",
        variant: "default",
      });
    }, 2000);
  };

  return (
    <Button 
      variant="outline" 
      className="rounded-full text-base px-6 flex items-center gap-2 hover:bg-accent/10 hover:text-accent transition-colors"
      onClick={handleDownload}
    >
      <FileText className="w-4 h-4" />
      Download Resume
      <Download className="w-4 h-4" />
    </Button>
  );
};

export default ResumeButton;
