import DashboardButton from "@/components/elements/DashboardButton"

export default function Home() {

    return (
      <div className="flex flex-wrap my-4 h-full px-8">
        <DashboardButton text="View Current Stock" navigatePath="/vehicles" />
        <DashboardButton text="Add a Vehicle" navigatePath="#" />
        <DashboardButton text="View Audit History" navigatePath="#" />
      </div>


    )
  }