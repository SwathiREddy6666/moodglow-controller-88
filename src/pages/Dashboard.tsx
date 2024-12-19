import { HomeCard } from "@/components/home/HomeCard";
import { RoomCard } from "@/components/room/RoomCard";
import { MoodDetector } from "@/components/mood/MoodDetector";
import { Button } from "@/components/ui/button";
import { Plus, LogOut } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";

interface Room {
  id: number;
  name: string;
  deviceCount: number;
}

interface Home {
  id: number;
  name: string;
  roomCount: number;
  rooms: Room[];
}

const Dashboard = () => {
  const [homes, setHomes] = useState<Home[]>([
    { 
      id: 1, 
      name: "My Home", 
      roomCount: 2,
      rooms: [
        { id: 1, name: "Living Room", deviceCount: 3 },
        { id: 2, name: "Bedroom", deviceCount: 2 },
      ]
    },
  ]);
  
  const { toast } = useToast();
  const navigate = useNavigate();

  const addHome = () => {
    const newHome = {
      id: homes.length + 1,
      name: `Home ${homes.length + 1}`,
      roomCount: 0,
      rooms: [],
    };
    setHomes([...homes, newHome]);
    toast({
      title: "Home Added",
      description: "New home has been added successfully.",
    });
  };

  const addRoom = (homeId: number) => {
    setHomes(
      homes.map((home) => {
        if (home.id === homeId) {
          const newRoom = {
            id: home.rooms.length + 1,
            name: `Room ${home.rooms.length + 1}`,
            deviceCount: 0,
          };
          return {
            ...home,
            roomCount: home.roomCount + 1,
            rooms: [...home.rooms, newRoom],
          };
        }
        return home;
      })
    );
    toast({
      title: "Room Added",
      description: "New room has been added successfully.",
    });
  };

  const addDevice = (homeId: number, roomId: number) => {
    setHomes(
      homes.map((home) => {
        if (home.id === homeId) {
          return {
            ...home,
            rooms: home.rooms.map((room) => {
              if (room.id === roomId) {
                return {
                  ...room,
                  deviceCount: room.deviceCount + 1,
                };
              }
              return room;
            }),
          };
        }
        return home;
      })
    );
    toast({
      title: "Device Added",
      description: "New device has been added successfully.",
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
        
        {homes.map((home) => (
          <div key={home.id} className="space-y-4">
            <HomeCard
              name={home.name}
              roomCount={home.roomCount}
              onAddRoom={() => addRoom(home.id)}
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ml-8">
              {home.rooms.map((room) => (
                <RoomCard
                  key={room.id}
                  name={room.name}
                  deviceCount={room.deviceCount}
                  onAddDevice={() => addDevice(home.id, room.id)}
                />
              ))}
            </div>
          </div>
        ))}

        <div className="mt-8">
          <MoodDetector />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;