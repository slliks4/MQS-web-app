import { myResources } from "@/constants"
const Resources = ({
    title,
    description,
    image,
    href,
    tags,
    closeModal,
}) => {
  return (
    <div
      className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
      >
        <div style={{ paddingLeft: '30px' }} className="flex justify-right">
           <h1 className="text-4xl font-bold mb-5">Team Resources</h1>
        </div>
    </div>
  )
}

export default Resources
