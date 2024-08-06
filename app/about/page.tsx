import WebGLPage from '@/app/webgl/page';

export default function Page() {
    return (
        <>
        <div className="relative top-0 left-0 w-full h-full  ">
            <WebGLPage  />
            <div className="absolute top-0 left-0 w-full h-full  ">
                <p className="text-4xl text-white">About</p>
            </div>
        </div>
        </>
    );
}