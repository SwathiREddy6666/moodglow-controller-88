import { HomeCard } from "@/components/home/HomeCard";
import { MoodDetector } from "@/components/mood/MoodDetector";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [homes, setHomes] = useState([
    { id: 1, name: "My Home", roomCount: 3 },
  ]);
  const { toast } = useToast();

  const addHome = () => {
    const newHome = {
      id: homes.length + 1,
      name: `Home ${homes.length + 1}`,
      roomCount: 0,
    };
    setHomes([...homes, newHome]);
    toast({
      title: "Home Added",
      description: "New home has been added successfully.",
    });
  };

  const addRoom = (homeId: number) => {
    setHomes(
      homes.map((home) =>
        home.id === homeId
          ? { ...home, roomCount: home.roomCount + 1 }
          : home
      )
    );
    toast({
      title: "Room Added",
      description: "New room has been added successfully.",
    });
  };

  return (
    <div className="container mx-auto p-4 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">My Homes</h1>
        <Button onClick={addHome}>
          <Plus className="mr-2" size={18} />
          Add Home
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {homes.map((home) => (
          <HomeCard
            key={home.id}
            name={home.name}
            roomCount={home.roomCount}
            onAddRoom={() => addRoom(home.id)}
          />
        ))}
      </div>

      <div className="mt-8">
        <MoodDetector />
      </div>
    </div>
  );
};

export default Dashboard;