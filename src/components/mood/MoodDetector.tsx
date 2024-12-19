import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Video, Type } from "lucide-react";

export const MoodDetector = () => {
  const [text, setText] = useState("");
  const [mood, setMood] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState(false);
  const { toast } = useToast();

  const detectMood = () => {
    // Simple mock mood detection
    const moods = ["happy", "calm", "energetic"];
    const detectedMood = moods[Math.floor(Math.random() * moods.length)];
    setMood(detectedMood);
    setShowDialog(true);
    toast({
      title: "Mood Detected",
      description: `Your current mood seems to be ${detectedMood}`,
    });
  };

  return (
    <>
      <Card className="w-full max-w-lg bg-[#F1F0FB] border-[#E5DEFF] shadow-lg transition-all duration-300 hover:shadow-xl">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-[#8E9196]">Mood Detection</CardTitle>
          <p className="text-sm text-muted-foreground">
            Your mood is being detected automatically through IoT sensors
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground mb-4">
            <Video className="h-4 w-4" />
            <span>Real-time video analysis active</span>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-muted" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#F1F0FB] px-2 text-muted-foreground">
                Or enter text manually
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Type className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">Optional text input</span>
            </div>
            <Textarea
              placeholder="How are you feeling today? (optional)"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="min-h-[100px] bg-white/50 border-[#E5DEFF]"
            />
          </div>

          <Button 
            onClick={detectMood} 
            className="w-full bg-[#D3E4FD] text-[#8E9196] hover:bg-[#E5DEFF] transition-colors"
          >
            Detect Mood
          </Button>
        </CardContent>
      </Card>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="bg-[#F1F0FB] border-[#E5DEFF]">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-semibold text-[#8E9196]">
              Mood Lighting Activated! ✨
            </DialogTitle>
          </DialogHeader>
          <div className="p-6 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              Here's your perfect lighting ambiance based on your {mood} mood!
            </p>
            <div className={`p-4 rounded-md bg-mood-${mood} text-white text-center animate-fade-in`}>
              Detected Mood: {mood}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};