import { HomeCard } from "@/components/home/HomeCard";
import { MoodDetector } from "@/components/mood/MoodDetector";
import { Button } from "@/components/ui/button";
import { Plus, LogOut } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [homes, setHomes] = useState([
    { id: 1, name: "My Home", roomCount: 3 },
  ]);
  const { toast } = useToast();
  const navigate = useNavigate();

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

  const handleLogout = () => {
    toast({
      title: "Logged Out",
      description: "You have been logged out successfully.",
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F1F0FB] to-white">
      <div className="container mx-auto p-4 space-y-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-[#8E9196]">My Smart Homes</h1>
            <p className="text-muted-foreground">Manage your homes and rooms</p>
          </div>
          <div className="flex gap-2">
            <Button onClick={addHome} className="bg-[#D3E4FD] text-[#8E9196] hover:bg-[#E5DEFF]">
              <Plus className="mr-2" size={18} />
              Add Home
            </Button>
            <Button variant="outline" onClick={handleLogout}>
              <LogOut className="mr-2" size={18} />
              Logout
            </Button>
          </div>
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
    </div>
  );
};

export default Dashboard;