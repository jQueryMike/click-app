import DashboardButton from "@/components/elements/DashboardButton"

export default function Home() {

    return (
      <div className="flex flex-wrap my-4 h-full px-8">
        <DashboardButton text="View Current Stock" navigatePath="/vehicles" disabled={false} />
        <DashboardButton text="View Audit History" navigatePath="#" disabled />
      </div>
    )
  }