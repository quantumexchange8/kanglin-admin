import {
    CloseButton,
    Dialog,
    DialogPanel,
    DialogTitle,
    Transition,
    TransitionChild,
} from '@headlessui/react';
import { XIcon } from './Icon/Outline';

export default function Modal({
    children,
    show = false,
    maxWidth = 'lg',
    closeable = true,
    onClose = () => {},
    title,
    footer,
    showFooter = 'flex',
}) {
    const close = () => {
        if (!closeable) {
            return;
        }
        onClose();
    };

    const maxWidthClass = {
        sm: 'sm:w-full md:min-w-[340px] md:max-w-[300px] lg:min-w-[400px] lg:max-w-[360px] xl:min-w-[420px] xl:max-w-[720px] ',
        md: 'sm:w-full md:min-w-[450px] md:max-w-[540px] lg:min-w-[600px] lg:max-w-[700px] xl:min-w-[640px] xl:max-w-[720px] ',
        lg: 'sm:max-w-[100px] md:min-w-[800px] md:max-w-[960px] xl:min-w-[960px] xl:max-w-[1080px] ',
    }[maxWidth];

    const maxHeightClass = {
        sm: 'sm:max-h-[70vh] md:max-h-[75vh] lg:max-h-[70vh] ',
        md: 'sm:max-h-[100vh] md:max-h-[85vh] lg:max-h-[80vh] ',
        lg: 'sm:max-h-[100vh] md:max-h-[90vh] lg:max-h-[85vh] ',
    }[maxWidth];

    return (
        <Transition show={show} leave="duration-200">
            <Dialog
                as="div"
                id="modal"
                className="fixed inset-0 z-50 flex items-center justify-center transform overflow-y-auto px-4 py-6 transition-all sm:px-0"
                onClose={() => {}}
            >
                <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="absolute inset-0 bg-gray-500/75" />
                </TransitionChild>

                <TransitionChild
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                    <DialogPanel
                        className={`mb-6 transform overflow-hidden rounded-lg bg-white shadow-xl transition-all sm:mx-auto sm:w-full ${maxWidthClass}`}
                    >
                         <DialogTitle className='w-full flex justify-between items-center py-4 px-6'>
                            <div className='text-gray-950 text-lg font-semibold'>{title}</div>
                            <CloseButton onClick={close}>
                                <XIcon />
                            </CloseButton>
                        </DialogTitle>
                        <div className="flex-1 overflow-y-auto">
                            {children}
                        </div>
                        <div className={` w-full p-6 bg-white ${showFooter}`}>
                            {footer}
                        </div>
                    </DialogPanel>
                </TransitionChild>
            </Dialog>
        </Transition>
    );
}
