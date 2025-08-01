import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export function month(number: number) {
	const month = [
		"Ene",
		"Feb",
		"Mar",
		"Abr",
		"May",
		"Jun",
		"Jul",
		"Ago",
		"Sep",
		"Oct",
		"Nov",
		"Dic"
	]
	return month[number]
}

export function filterItems<T>(query: string, items: T[]): T[] {
	if (!query || query.trim() === "") {
		return items
	}

	const lowerQuery = query.toLowerCase()
	return items.filter((item: any) => {
		return Object.values(item).some(value => {
			return (
				typeof value === "string" && value.toLowerCase().includes(lowerQuery)
			)
		})
	})
}
