import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Calendar, Mail, Phone } from "lucide-react";

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  productName?: string;
}

export default function ContactModal({ open, onOpenChange, productName }: ContactModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {productName ? `Interested in ${productName}?` : "Contact Us"}
          </DialogTitle>
          <DialogDescription className="text-base">
            Choose your preferred way to connect with us
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-3 py-4">
          <a 
            href="https://calendly.com/onetribeheru/connection" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block"
          >
            <Button 
              size="lg" 
              className="w-full bg-green-700 hover:bg-green-800 text-lg py-6"
              onClick={() => onOpenChange(false)}
            >
              <Calendar className="mr-3 h-6 w-6" />
              Book Free 15-Min Call
            </Button>
          </a>

          <a 
            href="mailto:Curtisheru@onetribe.io?subject=Inquiry about OneTribe Products"
            className="block"
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full text-lg py-6"
              onClick={() => onOpenChange(false)}
            >
              <Mail className="mr-3 h-6 w-6" />
              Email Us
            </Button>
          </a>

          <a 
            href="tel:+18032015723"
            className="block"
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full text-lg py-6"
              onClick={() => onOpenChange(false)}
            >
              <Phone className="mr-3 h-6 w-6" />
              Call (803) 201-5723
            </Button>
          </a>
        </div>

        <div className="text-center text-sm text-gray-600 pt-2">
          <p>We typically respond within 24 hours</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}

