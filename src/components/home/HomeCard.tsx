import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Plus } from "lucide-react";

interface HomeCardProps {
  name: string;
  roomCount: number;
  onAddRoom: () => void;
}

export const HomeCard = ({ name, roomCount, onAddRoom }: HomeCardProps) => {
  return (
    <Card className="w-full max-w-sm animate-fade-in bg-white/95 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-lg font-medium text-[#8E9196]">
          <Home className="inline-block mr-2 text-[#D3E4FD]" size={18} />
          {name}
        </CardTitle>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onAddRoom}
          className="hover:bg-[#D3E4FD]/10"
        >
          <Plus size={18} />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-[#8E9196]">{roomCount} rooms</div>
        <p className="text-sm text-muted-foreground">Click + to add a new room</p>
      </CardContent>
    </Card>
  );
};