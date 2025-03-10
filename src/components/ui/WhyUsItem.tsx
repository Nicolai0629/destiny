interface WhyUsItemProps {
  icon: string;
  title: string;
  description: string;
}

export const WhyUsItem = ({ icon, title, description }: WhyUsItemProps) => {
  return (
    <div className="box-border flex gap-4 mb-6">
      <div className="box-border w-12 h-12 flex items-center justify-center bg-indigo-100 rounded-[50%]">
        <div dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <div>
        <h3 className="box-border text-xl font-bold text-gray-900 mb-4">
          {title}
        </h3>
        <p className="box-border text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
};
