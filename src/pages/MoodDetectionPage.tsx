import { MoodDetector } from "@/components/mood/MoodDetector";
import { MoodHistory } from "@/components/mood/MoodHistory";
import { SystemConfig } from "@/components/mood/SystemConfig";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MoodDetectionPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F1F0FB] to-white p-4 md:p-8">
      <div className="container mx-auto space-y-8">
        <Button
          variant="ghost"
          onClick={() => navigate("/dashboard")}
          className="mb-4"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Dashboard
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <MoodDetector />
            <SystemConfig />
          </div>
          <div>
            <MoodHistory />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoodDetectionPage;