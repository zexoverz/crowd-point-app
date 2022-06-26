import prisma from "../prisma/prisma-client"

async function main() {
    const points = await prisma.point.createMany({
        data: [
            { longitude: 106.77709118108051, latitude: -6.142837378870265, brand: 'Infinix', time: new Date('2021-10-20 08:00:00'), user_count: 1},
            { longitude: 106.77709118108051, latitude: -6.142837378870265, brand: 'Samsung', time: new Date('2021-10-20 07:00:00'), user_count: 1},
            { longitude: 106.77809118108054, latitude: -6.142837378870266, brand: 'Xiaomi', time: new Date('2021-10-20 09:00:00'), user_count: 1},
            { longitude: 106.7790911810806, latitude: -6.142837378870266, brand: 'Xiaomi', time: new Date('2021-10-20 07:00:00'), user_count: 1},
            { longitude: 106.7790911810806, latitude: -6.142837378870266, brand: 'Oppo', time: new Date('2021-10-20 07:00:00'), user_count: 5},
            { longitude: 106.7790911810806, latitude: -6.142837378870266, brand: 'Xiaomi', time: new Date('	2021-10-20 08:00:00'), user_count: 2},
            { longitude: 106.78109118108071, latitude: -6.142837378870266, brand: 'Itel', time: new Date('2021-10-20 08:00:00'), user_count: 8},
            { longitude: 106.78209118108074, latitude: -6.142837378870266, brand: 'Huawei', time: new Date('2021-10-20 08:00:00'), user_count: 6},
            { longitude: 106.78209118108074, latitude: -6.142837378870266, brand: 'Samsung', time: new Date('2021-10-20 08:00:00'), user_count: 1},
            { longitude: 106.78209118108074, latitude: -6.142837378870266, brand: 'Samsung', time: new Date('2021-10-20 07:00:00'), user_count: 2},
        ],
    })
  
    console.log({ points })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })