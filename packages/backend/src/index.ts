const main = async () => {
    const result = await fetch('https://api.waifu.pics/sfw/neko').then((res) => res.json())
    console.log(result)
}
main()
