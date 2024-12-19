import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Lamp, Plus, Mic, Video, Type, Palette } from "lucide-react";
import { useState } from "react";

interface RoomCardProps {
  name: string;
  deviceCount: number;
  onAddDevice: () => void;
}

export const RoomCard = ({ name, deviceCount, onAddDevice }: RoomCardProps) => {
  const [intensity, setIntensity] = useState([50]);
  const [isVideoConnected, setIsVideoConnected] = useState(true);
  const [selectedScheme, setSelectedScheme] = useState("Warm");

  const colorSchemes = ["Warm", "Cool", "Natural", "Vibrant"];

  return (
    <Card className="w-full animate-fade-in bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium text-[#8E9196]">
          <Lamp className="inline-block mr-2 text-[#D3E4FD]" size={18} />
          {name}
        </CardTitle>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onAddDevice}
          className="hover:bg-[#D3E4FD]/10"
        >
          <Plus size={18} />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">{deviceCount} devices</span>
          <span className={`text-xs px-2 py-1 rounded-full ${isVideoConnected ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {isVideoConnected ? 'Online' : 'Offline'}
          </span>
        </div>

        <div className="space-y-4 pt-4">
          <div className="flex items-center gap-2">
            <Video className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              Video feed {isVideoConnected ? 'connected' : 'disconnected'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Type className="h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Type your mood here..."
              className="w-full text-sm bg-transparent border-b border-muted focus:outline-none focus:border-[#D3E4FD]"
            />
          </div>

          <div className="flex items-center gap-2">
            <Mic className="h-4 w-4 text-muted-foreground" />
            <Button variant="outline" size="sm" className="w-full text-sm">
              Record Audio
            </Button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">Light Intensity</span>
              <span className="text-sm text-muted-foreground">{intensity}%</span>
            </div>
            <Slider
              value={intensity}
              onValueChange={setIntensity}
              max={100}
              step={1}
              className="w-full"
            />
          </div>

          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Color Scheme</span>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="sm" className="gap-2">
                  <Palette className="h-4 w-4" />
                  {selectedScheme}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {colorSchemes.map((scheme) => (
                  <DropdownMenuItem
                    key={scheme}
                    onClick={() => setSelectedScheme(scheme)}
                  >
                    {scheme}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};