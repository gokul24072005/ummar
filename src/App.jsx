import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { ThemeProvider } from "@/hooks/useTheme";
import SmoothScroll from "@/components/SmoothScroll";
import { ProtectedRoute } from "./components/admin";
import { AdminProvider } from "@/context/AdminContext";

const Development = lazy(() => import("./pages/Development"));
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Career = lazy(() => import("./pages/Career"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Clients = lazy(() => import("./pages/Clients"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const Services = lazy(() => import("./pages/Services"));
const GetStarted = lazy(() => import("./pages/GetStarted"));
const JobOpenings = lazy(() => import("./pages/JobOpenings"));
const InternshipOpenings = lazy(() => import("./pages/InternshipOpenings"));

const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const PopupManagement = lazy(() => import("./pages/admin/PopupManagement"));
const TestimonialManagement = lazy(() => import("./pages/admin/TestimonialManagement"));
const JobRoleManagement = lazy(() => import("./pages/admin/JobRoleManagement"));
const ContactManagement = lazy(() => import("./pages/admin/ContactManagement"));
const InternManagement = lazy(() => import("./pages/admin/InternManagement"));
const ClientManagement = lazy(() => import("./pages/admin/ClientManagement"));
const TeamManagement = lazy(() => import("./pages/admin/TeamManagement"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const PhotoManagement = lazy(() => import("./pages/admin/PhotoManagement"));
const ServiceRequestManagement = lazy(() => import("./pages/admin/ServiceRequestManagement"));

const WebDevelopment = lazy(() => import("./pages/development/WebDevelopment"));
const SocialMediaMarketing = lazy(() => import("./pages/development/SocialMediaMarketing"));
const ContentWriting = lazy(() => import("./pages/development/ContentWriting"));
const GraphicsDesigner = lazy(() => import("./pages/development/GraphicsDesigner"));
const SoftwareDevelopment = lazy(() => import("./pages/development/SoftwareDevelopment"));
const AppDevelopment = lazy(() => import("./pages/development/AppDevelopment"));
const AiMlDevelopment = lazy(() => import("./pages/development/AiMlDevelopment"));

const BulkSms = lazy(() => import("./pages/services/BulkSms"));
const VoiceSms = lazy(() => import("./pages/services/VoiceSms"));
const WhatsappPanel = lazy(() => import("./pages/services/WhatsappPanel"));
const WhatsappMarketing = lazy(() => import("./pages/services/WhatsappMarketing"));
const DigitalElectionCampaign = lazy(() => import("./pages/services/DigitalElectionCampaign"));

const queryClient = new QueryClient();
const appFallback = (
  <div className="flex min-h-screen items-center justify-center bg-background text-muted-foreground">
    Loading...
  </div>
);

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AdminProvider>
        <ThemeProvider>
          <MotionConfig reducedMotion="user" transition={{ duration: 0.12, ease: "easeOut" }}>
            <SmoothScroll>
              <Suspense fallback={appFallback}>
                <TooltipProvider>
                  <Toaster />
                  <Sonner />

                  <BrowserRouter>
                    <Routes>
                      <Route path="/" element={<Index />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/development" element={<Development />} />
                      <Route path="/clients" element={<Clients />} />
                      <Route path="/career" element={<Career />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/portfolio" element={<Portfolio />} />
                      <Route path="/services" element={<Services />} />
                      <Route path="/get-started" element={<GetStarted />} />
                      <Route path="/career/jobs" element={<JobOpenings />} />
                      <Route path="/career/internships" element={<InternshipOpenings />} />
                      
                      {/* Development routes */}
                      <Route path="/development/web-development" element={<WebDevelopment/>} />
                      <Route path="/development/social-media-marketing" element={<SocialMediaMarketing />} />
                      <Route path="/development/content-writing" element={<ContentWriting />} />
                      <Route path="/development/graphics-designer" element={<GraphicsDesigner />} />
                      <Route path="/development/software-development" element={<SoftwareDevelopment />} />
                      <Route path="/development/app-development" element={<AppDevelopment />} />
                      <Route path="/development/ai-ml-development" element={<AiMlDevelopment />} />
                      
                      {/* Services routes */}
                      <Route path="/services/bulk-sms" element={<BulkSms />} />
                      <Route path="/services/voice-sms" element={<VoiceSms />} />
                      <Route path="/services/whatsapp-panel" element={<WhatsappPanel />} />
                      <Route path="/services/whatsapp-marketing" element={<WhatsappMarketing />} />
                      <Route path="/services/digital-election-campaign" element={<DigitalElectionCampaign />} />
                      
                      {/* Admin routes */}
                      <Route path="/admin/login" element={<AdminLogin />} />
                      <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
                      <Route path="/admin/popups" element={<ProtectedRoute><PopupManagement /></ProtectedRoute>} />
                      <Route path="/admin/testimonials" element={<ProtectedRoute><TestimonialManagement /></ProtectedRoute>} />
                      <Route path="/admin/job-roles" element={<ProtectedRoute><JobRoleManagement /></ProtectedRoute>} />
                      <Route path="/admin/clients" element={<ProtectedRoute><ClientManagement /></ProtectedRoute>} />
                      <Route path="/admin/team" element={<ProtectedRoute><TeamManagement /></ProtectedRoute>} />
                      <Route path="/admin/interns" element={<ProtectedRoute><InternManagement /></ProtectedRoute>} />
                      <Route path="/admin/contacts" element={<ProtectedRoute><ContactManagement /></ProtectedRoute>} />
                      <Route path="/admin/photo" element={<ProtectedRoute><PhotoManagement /></ProtectedRoute>} />
                      <Route path="/admin/service-requests" element={<ProtectedRoute><ServiceRequestManagement /></ProtectedRoute>} />

                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </BrowserRouter>
                </TooltipProvider>
              </Suspense>
            </SmoothScroll>
          </MotionConfig>
        </ThemeProvider>
      </AdminProvider>
    </QueryClientProvider>
  );
};

export default App;
