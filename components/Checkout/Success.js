function Success({ has }) {
  return (
    <div className="h-full lg:flex lg:items-center lg:space-x-12">
      <div className="lg:w-1/2 ">
        <h1 className="font-serif font-medium italic text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
          Thanks!
        </h1>
        <p className="mt-3 text-lg md:text-xl font-sans">
          {has.digital_fulfillment
            ? "You’ll receive an email with your receipt, and a backup link to re-download your purchase"
            : "You’ll receive an email with your receipt, and tracking information."}
        </p>
      </div>
      
    </div>
    
  );
}

export default Success;