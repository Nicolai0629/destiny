
import { Card } from "./card";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <Card className="box-border shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1),0_2px_4px_-1px_rgba(0,0,0,0.06)] bg-white p-6 rounded-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-md">
      <div className="mb-4" dangerouslySetInnerHTML={{ __html: icon }} />
      <h3 className="box-border text-xl font-bold text-gray-900 mb-4">
        {title}
      </h3>
      <p className="box-border text-base text-gray-600">{description}</p>
    </Card>
  );
};
