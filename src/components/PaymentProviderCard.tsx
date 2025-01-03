interface PaymentProviderCardProps {
  title: string;
  description: string;
  imagePath: string;
}

const PaymentProviderCard = ({
  title,
  description,
  imagePath,
}: PaymentProviderCardProps) => {
  return (
    <div className="border border-[#E3E8E8] bg-[#FAFAFA] rounded px-[30px] py-[50px] w-full h-[280px] flex flex-col items-start justify-start">
      <img src={imagePath} alt="payment provider" />
      <h1 className="text-xl font-semibold mt-[40px]">{title}</h1>
      <h1 className="text-subtitle text-sm font-light mt-[8px]">
        {description}
      </h1>
    </div>
  );
};

export default PaymentProviderCard;
