import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="container mx-auto flex p-5 gap-5">
    <div class="size-40 border bg-primary">
      bg-primary
    </div>

    <div class="size-40 border ring ring-primary">
      ring-primary
    </div>

    <div class="size-40 border ring ring-primary/50">
      ring-primary/50
    </div>

    <div class="size-40 border text-primary">
      text-primary
    </div>

    <div class="size-40 border text-primary/50">
      text-primary/50
    </div>
  </div>
`
