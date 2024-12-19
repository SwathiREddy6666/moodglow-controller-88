import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Settings, Eye } from "lucide-react";

export const SystemConfig = () => {
  const [dynamicLighting, setDynamicLighting] = useState(true);
  const [previewMode, setPreviewMode] = useState(false);

  return (
    <Card className="w-full bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-[#8E9196] flex items-center gap-2">
          <Settings className="h-5 w-5" />
          System Configuration
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="dynamic-lighting">Dynamic Mood Lighting</Label>
            <p className="text-sm text-muted-foreground">
              Automatically adjust lighting based on detected mood
            </p>
          </div>
          <Switch
            id="dynamic-lighting"
            checked={dynamicLighting}
            onCheckedChange={setDynamicLighting}
          />
        </div>

        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <Label htmlFor="preview-mode" className="flex items-center gap-2">
              <Eye className="h-4 w-4" />
              Preview Mode
            </Label>
            <p className="text-sm text-muted-foreground">
              Preview lighting effects before applying
            </p>
          </div>
          <Switch
            id="preview-mode"
            checked={previewMode}
            onCheckedChange={setPreviewMode}
          />
        </div>
      </CardContent>
    </Card>
  );
};