import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const queueItems = [
  { type: "Fatigue Alert", site: "Pilbara Mine", age: "5m", priority: "High", owner: "Ctrl Room" },
  { type: "Overload", site: "Pilbara Mine", age: "12m", priority: "Medium", owner: "Dispatch" },
  { type: "Road Grade", site: "Pilbara Mine", age: "35m", priority: "Low", owner: "Geotech" },
  { type: "Security", site: "Pilbara Mine", age: "1h", priority: "High", owner: "Security Lead" },
  { type: "Compliance", site: "Pilbara Mine", age: "2h", priority: "Medium", owner: "Shift Boss" },
];

export function SmartHubQueueCard() {
  return (
    <Card className="card-hover">
      <CardHeader>
        <CardTitle>Smart Hub Queue</CardTitle>
        <CardDescription>Top 5 open actions requiring attention.</CardDescription>
      </CardHeader>
      <CardContent className="p-0">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Site</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Owner</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {queueItems.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.type}</TableCell>
                <TableCell>{item.site}</TableCell>
                <TableCell>{item.age}</TableCell>
                <TableCell className={item.priority === "High" ? "text-primary font-bold" : ""}>{item.priority}</TableCell>
                <TableCell>{item.owner}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
