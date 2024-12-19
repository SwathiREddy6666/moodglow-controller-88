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
    <Card className="w-full max-w-sm animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          <Home className="inline-block mr-2" size={18} />
          {name}
        </CardTitle>
        <Button variant="ghost" size="icon" onClick={onAddRoom}>
          <Plus size={18} />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{roomCount} rooms</div>
      </CardContent>
    </Card>
  );
};