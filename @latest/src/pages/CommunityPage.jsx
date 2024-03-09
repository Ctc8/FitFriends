import Workouts2 from "../components/Workouts2"
import CommunityPost from "../components/CommunityPost"

export default function CommunityPage() {
  return (
    <div>
      <h1>Community Workouts</h1>
      
      <Workouts2 title="Chest" user="John Doe"/>
      <CommunityPost/>
    </div>
  )
}