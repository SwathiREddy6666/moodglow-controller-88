import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const MoodDetector = () => {
  const [text, setText] = useState("");
  const [mood, setMood] = useState<string | null>(null);
  const { toast } = useToast();

  const detectMood = () => {
    // Simple mock mood detection
    const moods = ["happy", "calm", "energetic"];
    const detectedMood = moods[Math.floor(Math.random() * moods.length)];
    setMood(detectedMood);
    toast({
      title: "Mood Detected",
      description: `Your current mood seems to be ${detectedMood}`,
    });
  };

  return (
    <Card className="w-full max-w-lg">
      <CardHeader>
        <CardTitle>Mood Detection</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="How are you feeling today?"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="min-h-[100px]"
        />
        <Button onClick={detectMood} className="w-full">
          Detect Mood
        </Button>
        {mood && (
          <div className={`p-4 rounded-md bg-mood-${mood} text-white text-center`}>
            Detected Mood: {mood}
          </div>
        )}
      </CardContent>
    </Card>
  );
};