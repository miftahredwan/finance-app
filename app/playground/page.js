
import Button from "../components/button";
import PageHeader from "../components/page-header";
import Trend from "../components/trend";
import TransactionItem from '@/app/components/transaction-item';
import TransactionSummaryItem from '@/app/components/transaction-summary-item';
import Label from '@/app/components/label';
import Input from '@/app/components/input';
import Separator from '@/app/components/separator';
import Skeleton from '@/app/components/skeleton';
// import Select from '@/app/components/select';

export const metadata = {
    title: "Playground"
  }

export default function Page() {
    return (
        <main className="space-y-8 mb-44">
        <h1 className="text-4xl mt-8">page Header</h1>
  
        <div>
          <h2 className="mb-4 text-lg font-mono"><PageHeader/></h2>
          <Separator/> 
         <div>Here goes the actual component</div>
        </div>

        <div>
        <h2 className="mb-4 text-lg font-mono">Trend</h2>
  <Separator/>         <div className="flex space-x-8">
          <Trend type="Income" amount={1000} prevAmount={900} />
          <Trend type="Expense" amount={12000} prevAmount={10000} />
          <Trend type="Investment" amount={7000} prevAmount={11100} />
          <Trend type="Saving" amount={500} prevAmount={950} />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">TransactionItem</h2>
  <Separator/>         <div className="space-y-4">
          <TransactionItem type="Income" description="Salary" amount={2000} />
          <TransactionItem type="Expense" category="Food" description="Going out to eat" amount={29} />
          <TransactionItem type="Saving" description="For children" amount={500} />
          <TransactionItem type="Investment" description="In Microsoft" amount={9000} />
        </div>
      </div>

      <div>
        <h2 className="mb-4 text-lg font-mono">TransactionSummaryItem + TransactionItem</h2>
  <Separator/>         <div className="space-y-4">
          <TransactionSummaryItem date="2024-05-01" amount={3500} />
    <Separator/>           <TransactionItem type="Income" description="Salary" amount={2000} />
          <TransactionItem type="Expense" category="Food" description="Going out to eat" amount={29} />
          <TransactionItem type="Saving" description="For children" amount={500} />
          <TransactionItem type="Investment" description="In Microsoft" amount={9000} />
        </div>
      </div>


      <div>
        <h2 className="mb-4 text-lg font-mono">Buttons</h2>
  <Separator/>         <div className="space-x-4">
          <Button>Hello</Button>
          <Button variant="outline">Hello</Button>
          <Button variant="ghost">Hello</Button>
          <Button size="xs">Hello</Button>
          <Button size="sm">Hello</Button>
          <Button size="lg">Hello</Button>
        </div>
      </div>



      <div>
        <h2 className="mb-4 text-lg font-mono">Forms</h2>
  <Separator/>         <div className="grid grid-cols-2 gap-4">
          <div>
          <Label className="mb-1">Your name</Label>
          <Input type="text" placeholder="Type something in here..." />
          </div>
          <div>
            <label className="text-gray-700 dark:text-gray-300 block mb-1">City</label>
            <select className="w-full rounded-md shadow-sm border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-950">
              <option>Warsaw</option>
              <option>Berlin</option>
              <option>London</option>
            </select>
          </div>
          <div className="flex items-center">
            <input type="checkbox" className="rounded border-gray-300 text-gray-700 bg-white dark:bg-gray-950 dark:text-gray-500 shadow-sm" />
            <label className="text-gray-700 dark:text-gray-300 ml-2">City</label>
          </div>
        </div>
      </div>



       <div>
        <h2 className="mb-4 text-lg font-mono">Loading Skeleton</h2>
        <Separator />
        <div className="space-y-8">
          <div className="flex space-x-4">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
          <div className="space-y-4">
            <Skeleton />
            <Skeleton />
            <Skeleton />
          </div>
        </div>
      </div>


      </main>
    )
  }