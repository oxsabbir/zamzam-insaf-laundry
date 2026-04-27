import { handleWhatsApp } from "@/lib/utils";
import { Button } from "./ui/button";

interface ServiceCardProps {
  title: string;
  detail: string;
  description: string;
  highlight: string;
}

const ServiceCard = ({
  title,
  detail,
  description,
  highlight,
}: ServiceCardProps) => {
  return (
    <div className="bg-card rounded-2xl shadow-lg p-8 flex flex-col items-center max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold text-foreground mb-4">{title}</h2>

      <p className="text-primary text-xl font-semibold mb-4">
        {detail}
      </p>

      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {description}
      </p>

      <p className="text-primary font-medium mb-6">({highlight})</p>

      <div className=" mt-auto">
        <Button
          onClick={() =>
            handleWhatsApp(
              `Hi, I would like to book your ${encodeURIComponent(title)} service. 
Please share the pickup details and available timing.
Thank you.`,
              true
            )
          }
          id="generate_lead"
          className=" bg-primary"
        >
          Request Service
        </Button>
      </div>

    </div>
  );
};

export default ServiceCard;
