import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { History, Clock } from "lucide-react";

interface MoodEntry {
  timestamp: string;
  mood: string;
  source: string;
  intensity: number;
}

const mockHistory: MoodEntry[] = [
  {
    timestamp: "2024-02-20 14:30",
    mood: "Happy",
    source: "Video Analysis",
    intensity: 85,
  },
  {
    timestamp: "2024-02-20 12:15",
    mood: "Calm",
    source: "Text Input",
    intensity: 60,
  },
  {
    timestamp: "2024-02-20 10:00",
    mood: "Energetic",
    source: "Audio Analysis",
    intensity: 90,
  },
];

export const MoodHistory = () => {
  return (
    <Card className="w-full bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-[#8E9196] flex items-center gap-2">
          <History className="h-5 w-5" />
          Mood History
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {mockHistory.map((entry, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-medium text-[#8E9196]">{entry.mood}</h4>
                    <p className="text-sm text-muted-foreground">
                      Source: {entry.source}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {entry.timestamp}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Intensity: {entry.intensity}%
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};