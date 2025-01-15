import About from '@/components/navbar-components/About';
import Inform from '@/components/navbar-components/Inform';
import MemberOrNot from '@/components/navbar-components/MemberOrNot';
import WorkoutOfDay from '@/components/navbar-components/WorkoutOfDay';


export default function page() {
  return (
    <div  >
      <About/>
      <MemberOrNot/>
      <Inform/>
      <WorkoutOfDay/>
    </div>
  );
}
