import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Tambahkan fungsi ini di bawah
export function formatCurrency(value: number) {
  return value.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
}