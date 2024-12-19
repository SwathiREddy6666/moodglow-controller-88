import { LoginForm } from "@/components/auth/LoginForm";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#D3E4FD] via-[#E5DEFF] to-[#FDE1D3] relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/25 [mask-image:linear-gradient(0deg,transparent,white)] -z-10" />
      <LoginForm />
    </div>
  );
};

export default Index;