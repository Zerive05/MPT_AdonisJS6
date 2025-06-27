import type { HttpContext } from '@adonisjs/core/http'

export default class DashboardController {
    async show({ inertia }: HttpContext) {
        // Data ini bisa Anda ambil dari database di kemudian hari
        const data = {
            produk: 100,
            kategori: 10,
            supplier: 5,
            penjualan: 200,
            stoklog: 50,
        }

        // Merender komponen Vue 'Dashboard.vue' dan mengirimkan data sebagai props
        return inertia.render('Dashboard', data)
    }
}