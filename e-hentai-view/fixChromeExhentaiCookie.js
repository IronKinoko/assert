;(function fixChromeExhentaiCookie() {
  if (location.href.indexOf('exhentai.org') === -1) {
    return alert('Please run in Exhentai.org')
  }

  const cookies = document.cookie.split(';').map((cookie) => cookie.trim())

  cookies.forEach((cookie) => {
    document.cookie =
      cookie +
      '; domain=.exhentai.org; path=/; max-age=31536000; secure;SameSite=None;'
  })

  console.info(
    '%c===Success===\nNow press F12 to close this console and go to next step.',
    'background:#f5f5f5;color:green'
  )
})()
