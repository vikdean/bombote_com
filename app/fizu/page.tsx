"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { TextCursorInput, Coins } from "lucide-react";

const formatNumber = (value: string): string => {
  const numericValue = value.replace(/\D/g, "");
  if (numericValue === "") return "";

  return parseInt(numericValue).toLocaleString("hu-HU").replace(/,/g, " ");
};

const parseFormattedNumber = (value: string): number => {
  const numericValue = value.replace(/\s/g, "");
  return numericValue === "" ? 0 : parseInt(numericValue);
};

const MONTHS = [
  { value: "január", label: "Január", workDays: 22 },
  { value: "február", label: "Február", workDays: 20 },
  { value: "március", label: "Március", workDays: 21 },
  { value: "április", label: "Április", workDays: 22 },
  { value: "május", label: "Május", workDays: 20 },
  { value: "június", label: "Június", workDays: 20 },
  { value: "július", label: "Július", workDays: 23 },
  { value: "augusztus", label: "Augusztus", workDays: 21 },
  { value: "szeptember", label: "Szeptember", workDays: 22 },
  { value: "október", label: "Október", workDays: 21 },
  { value: "november", label: "November", workDays: 21 },
  { value: "december", label: "December", workDays: 20 },
];

const calculateSalary = (grossSalary: number, overtimeWeekdays: number, overtimeWeekends: number, standby: number, workDays: number) => {
  const workHours = workDays * 8;
  const hourlyRate = grossSalary / workHours;
  const overtimeBase = (grossSalary / workHours) * (overtimeWeekdays + overtimeWeekends);
  const overtimeSupplement50 = overtimeWeekdays * (grossSalary / 174) * 0.5;
  const overtimeSupplement100 = overtimeWeekends * (grossSalary / 174) * 1.0;
  const standbyFee = standby * hourlyRate * 0.2;
  const netSalaryBase = grossSalary * 0.665;
  const netSalaryWithOvertime = (grossSalary + overtimeBase + overtimeSupplement50 + overtimeSupplement100 + standbyFee) * 0.665;

  return {
    workHours,
    hourlyRate,
    overtimeBase,
    overtimeSupplement50,
    overtimeSupplement100,
    standbyFee,
    netSalaryBase,
    netSalaryWithOvertime,
  };
};

export default function FizuCalculator() {
  const currentMonthValue = MONTHS[new Date().getMonth()]?.value || "január";
  const [month, setMonth] = useState(currentMonthValue);
  const [grossSalaryInput, setGrossSalaryInput] = useState("");
  const [overtimeWeekdaysInput, setOvertimeWeekdaysInput] = useState("");
  const [overtimeWeekendsInput, setOvertimeWeekendsInput] = useState("");
  const [standbyInput, setStandbyInput] = useState("");

  const selectedMonth = MONTHS.find((m) => m.value === month);
  const workDays = selectedMonth?.workDays || 20;

  const toNumber = (v: string) => (v.trim() === "" ? 0 : Number(v));
  const grossSalary = parseFormattedNumber(grossSalaryInput);
  const overtimeWeekdays = toNumber(overtimeWeekdaysInput);
  const overtimeWeekends = toNumber(overtimeWeekendsInput);
  const standby = toNumber(standbyInput);

  const calculations = calculateSalary(grossSalary, overtimeWeekdays, overtimeWeekends, standby, workDays);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="bg-gradient-to-r from-white via-slate-200 to-slate-600 bg-clip-text tracking-tight text-transparent sm:text-3xl md:text-3xl lg:text-4xl font-bold font-sans pb-2">
            Fizu Kalkulátor
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Input Section */}
          <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-500/40 shadow-2xl backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-t-lg mb-4 border-b border-gray-500/20">
              <CardTitle className="flex items-center gap-3 text-gray-100 text-xl">
                <div className="p-2 bg-gradient-to-tl from-cyan-400/30 to-white/30 rounded-lg">
                  <TextCursorInput className="h-6 w-6" />
                </div>
                Beviteli adatok
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="month" className="text-gray-200 font-medium">
                  Hónap
                </Label>
                <Select value={month} onValueChange={setMonth}>
                  <SelectTrigger className="bg-gray-700/70 border-gray-600 text-gray-100 hover:bg-gray-700 focus:border-cyan-400 focus:ring-cyan-400">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-800 border-gray-600">
                    {MONTHS.map((m) => (
                      <SelectItem key={m.value} value={m.value} className="text-gray-100 hover:bg-gray-700 focus:bg-gray-700">
                        {m.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="grossSalary" className="text-gray-200 font-medium">
                  Bruttó bér (Ft)
                </Label>
                <Input
                  id="grossSalary"
                  type="text"
                  value={grossSalaryInput}
                  onChange={(e) => setGrossSalaryInput(formatNumber(e.target.value))}
                  placeholder="0"
                  className="bg-gray-700/70 border-gray-600 text-gray-100 placeholder:text-gray-400 hover:bg-gray-700 focus:border-cyan-400 focus:ring-cyan-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="overtimeWeekdays" className="text-gray-200 font-medium">
                  Túlóra - hétköznap (óra)
                </Label>
                <Input
                  id="overtimeWeekdays"
                  type="number"
                  value={overtimeWeekdaysInput}
                  onChange={(e) => setOvertimeWeekdaysInput(e.target.value)}
                  placeholder="0"
                  className="bg-gray-700/70 border-gray-600 text-gray-100 placeholder:text-gray-400 hover:bg-gray-700 focus:border-cyan-400 focus:ring-cyan-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="overtimeWeekends" className="text-gray-200 font-medium">
                  Túlóra - hétvége (óra)
                </Label>
                <Input
                  id="overtimeWeekends"
                  type="number"
                  value={overtimeWeekendsInput}
                  onChange={(e) => setOvertimeWeekendsInput(e.target.value)}
                  placeholder="0"
                  className="bg-gray-700/70 border-gray-600 text-gray-100 placeholder:text-gray-400 hover:bg-gray-700 focus:border-cyan-400 focus:ring-cyan-400"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="standby" className="text-gray-200 font-medium">
                  Készenlét (óra)
                </Label>
                <Input
                  id="standby"
                  type="number"
                  value={standbyInput}
                  onChange={(e) => setStandbyInput(e.target.value)}
                  placeholder="0"
                  className="bg-gray-700/70 border-gray-600 text-gray-100 placeholder:text-gray-400 hover:bg-gray-700 focus:border-cyan-400 focus:ring-cyan-400"
                />
              </div>
            </CardContent>
          </Card>

          {/* Results Section */}
          <Card className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 border border-gray-500/40 shadow-2xl backdrop-blur-sm">
            <CardHeader className="bg-gradient-to-br from-purple-600/10 to-cyan-600/10 rounded-t-lg mb-8 border-b border-gray-500/20">
              <CardTitle className="flex items-center gap-3 text-gray-100 text-xl">
                <div className="p-2 bg-gradient-to-tl from-orange-400/30 to-white/30 rounded-lg">
                  <Coins className="h-6 w-6" />
                </div>
                Összegek
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              {/* Work Statistics */}
              <div className="bg-gray-600/30 p-4 rounded-lg border border-gray-600/50">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-sm font-medium text-gray-400">Munkanapok</p>
                    <p className="text-2xl font-bold text-gray-100">{workDays}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-400">Munkaórák</p>
                    <p className="text-2xl font-bold text-gray-100">{calculations.workHours}</p>
                  </div>
                </div>
              </div>
              {/* Base Rate */}
              <div className="bg-gray-600/30 p-3 rounded-lg border border-gray-600/50">
                <p className="text-sm font-medium text-gray-400">Óradíj</p>
                <p className="text-xl font-bold text-gray-100">{Math.round(calculations.hourlyRate).toLocaleString()} Ft</p>
              </div>
              <Separator className="bg-gray-500" />
              {/* Overtime Section */}
              <div className="space-y-3">
                <div className="bg-lime-900/20 p-3 rounded-lg border border-lime-700/50">
                  <p className="text-sm font-medium text-gray-400">Túlóra alap</p>
                  <p className="text-xl font-bold text-lime-400">{Math.round(calculations.overtimeBase).toLocaleString()} Ft</p>
                </div>
                <div className="bg-green-900/20 p-3 rounded-lg border border-green-700/50">
                  <p className="text-sm font-medium text-gray-400">Túlóra pótlék 50%</p>
                  <p className="text-xl font-bold text-green-400">{Math.round(calculations.overtimeSupplement50).toLocaleString()} Ft</p>
                </div>
                <div className="bg-emerald-900/20 p-3 rounded-lg border border-emerald-700/50">
                  <p className="text-sm font-medium text-gray-400">Túlóra pótlék 100%</p>
                  <p className="text-xl font-bold text-emerald-400">{Math.round(calculations.overtimeSupplement100).toLocaleString()} Ft</p>
                </div>
              </div>
              {/* Standby Fee */}
              <div className="bg-blue-900/20 p-3 rounded-lg border border-cyan-700/50">
                <p className="text-sm font-medium text-gray-400">Készenléti díj</p>
                <p className="text-xl font-bold text-cyan-300">{Math.round(calculations.standbyFee).toLocaleString()} Ft</p>
              </div>
              <Separator className="bg-gray-500" />
              {/* Final Results */}
              <div className="space-y-4">
                <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-700/50">
                  <p className="text-sm font-medium text-gray-400">Nettó bér (alapbér)</p>
                  <p className="text-xl font-bold text-gray-300">{Math.round(calculations.netSalaryBase).toLocaleString()} Ft</p>
                </div>
                <div className="bg-amber-900/30 p-3 rounded-lg border border-amber-700/50">
                  <p className="text-base font-bold text-gray-200">Nettó bér túlórával</p>
                  <p className="text-2xl font-bold text-amber-400">{Math.round(calculations.netSalaryWithOvertime).toLocaleString()} Ft</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
