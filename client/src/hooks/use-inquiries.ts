import { useMutation } from "@tanstack/react-query";
import { api, type InquiryInput, type InquiryResponse } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";

export function useCreateInquiry() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InquiryInput) => {
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to submit inquiry");
      }
      
      // Manually parse since we know the shape from shared routes, 
      // but in a real app we'd use api.inquiries.create.responses[201].parse(json)
      return res.json() as Promise<InquiryResponse>;
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Sent",
        description: "Thank you for contacting us. Our team will review your message securely and respond shortly.",
        variant: "default",
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
