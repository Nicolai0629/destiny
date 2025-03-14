
import { WhyUsItem } from "../ui/WhyUsItem";

const whyUsItems = [
  {
    icon: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.93356 13.5369L9.93356 17.5369L19.9336 7.53687" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
    title: "Cost Effective",
    description:
      "Reduce operational costs by up to 60% while maintaining quality.",
  },
  {
    icon: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.9336 10.5369V3.53687L4.93356 14.5369H11.9336V21.5369L20.9336 10.5369H13.9336Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
    title: "Skilled Professionals",
    description: "Access to a global talent pool of experienced professionals.",
  },
  {
    icon: `<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.9336 8.53687V12.5369L15.9336 15.5369M21.9336 12.5369C21.9336 13.7188 21.7008 14.8891 21.2485 15.981C20.7962 17.0729 20.1333 18.0651 19.2975 18.9008C18.4618 19.7366 17.4696 20.3995 16.3777 20.8518C15.2858 21.3041 14.1155 21.5369 12.9336 21.5369C11.7517 21.5369 10.5813 21.3041 9.48941 20.8518C8.39748 20.3995 7.40533 19.7366 6.5696 18.9008C5.73387 18.0651 5.07094 17.0729 4.61865 15.981C4.16636 14.8891 3.93356 13.7188 3.93356 12.5369C3.93356 10.1499 4.88177 7.86073 6.5696 6.1729C8.25743 4.48508 10.5466 3.53687 12.9336 3.53687C15.3205 3.53687 17.6097 4.48508 19.2975 6.1729C20.9854 7.86073 21.9336 10.1499 21.9336 12.5369Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>`,
    title: "24/7 Support",
    description: "Round-the-clock assistance and dedicated account management.",
  },
];

export const WhyUs = () => {
  return (
    <section id="about" className="box-border bg-[#EBF4FF] py-[105px]">
      <h2 className="box-border text-3xl font-bold text-gray-900 text-center mb-10">
        Why Choose Us?
      </h2>
      <div className="box-border max-w-[1312px] flex gap-10 mx-auto my-0 px-6 py-0 max-md:flex-col">
        <div className="box-border flex-1">
          {whyUsItems.map((item, index) => (
            <WhyUsItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
        <div className="box-border w-[806px] h-[520px] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)] bg-white rounded-[20px] overflow-hidden max-md:w-full max-md:h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="Man working on laptop" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};
