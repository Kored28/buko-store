import { Billboard as BillboardType } from "@/types";

interface BillBoardProps {
  data: BillboardType;
}


const Billboard: React.FC<BillBoardProps> = ({ data }) => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl">
      <div 
      style={{ backgroundImage: `url(${data?.imageUrl})` }}
      className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
      >
          <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
              <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-screen-xl max-w-xs">
                  {data.label}
              </div>
          </div>
      </div> 
    </div>
  )
}

export default Billboard