import FolderIcon from '@mui/icons-material/Folder';
import {emptyfolder} from '../../assests';
import { folderNameProps } from '../../utils/type';
const ComponentFolder:React.FC<folderNameProps>=({foldername})=>{
    return(
        <div className="flex flex-col w-1/4 md:w-1/12 items-center p-2 bg-white hover:bg-gray-100 rounded-md cursor-pointer ">
            <div className="flex items-center justify-center  rounded-full " >
            <img className='' src={emptyfolder} alt="" />
            </div>
            <div className="text-gray-800 font-medium">{foldername}</div>
            <div className="text-gray-500 text-sm">folder count</div>
        </div>
    )
}
export default ComponentFolder