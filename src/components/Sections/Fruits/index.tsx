import { PrevNext as PrevNextButtons, Title } from ".."

import { FilterFood } from "../../../utils/filters"
import RowContainer from "../../Containers/Row"
import { useState } from "react"

const Fruits = () => {
  const fruits = FilterFood("fruits")
  const [scrollValue, setScrollValue] = useState(0)


  return (
    <section className="w-full my-5">
        <div className="w-full flex items-center justify-between">
          <Title title="Our fresh & healthy fruits" />
          <PrevNextButtons onNext={() => setScrollValue(1000)} onPrev = {() => setScrollValue(-1000)} />
        </div>
        <RowContainer className="bg-containerbg" scrollOffset = {scrollValue} flag = {true} items = {fruits} />
    </section>
  )
}

export default Fruits