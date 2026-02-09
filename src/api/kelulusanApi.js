export const kelulusanData = [
  {
    nisn: "1234567890",
    nama: "Aisyah Putri",
    status: "LULUS",
    tahun: "2024/2025"
  },
  {
    nisn: "0987654321",
    nama: "Muhammad Rizki",
    status: "TIDAK LULUS",
    tahun: "2024/2025"
  }
]

// simulasi request API
export function cekKelulusan(nisn) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = kelulusanData.find(
        (item) => item.nisn === nisn
      )
      resolve(result)
    }, 1000)
  })
}