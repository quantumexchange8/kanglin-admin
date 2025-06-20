import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Dropdown, InputNumber, Select, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from 'antd';
import Button from "@/Components/Button";

export default function CreateProduct() {

    const { t } = useTranslation();
    const { TextArea } = Input;
    const [isLoading, setIsLoading] = useState(true);
    const [getCategory, setGetCategory] = useState([]);

    const fetchCategories = async () => {
        setIsLoading(true);

        try {

            const response = await axios.get('/getCategories');
            setGetCategory(response.data);
            
        } catch (error) {
            console.error('error', error);
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchCategories();
    }, [])

    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        category_id: '',
        product_code: '',
        product_price: '',
        product_pv: '',
        product_max_kp: '',
        stock: '',
        description: '',
        instruction_desciption: '',
        product_feature: '',
        images_thumbnail: null,
        images: [],
    });

    const handlePhotoThumbnailSelected = (info) => {
        const file = info.file.originFileObj || info.file;
        setData('images_thumbnail', file);
    };

    const handlePhotoSelected = ({ fileList }) => {
        const files = fileList.map(f => f.originFileObj).filter(Boolean);
        setData('images', files);
    };

    const handleSelectChange = (value) => {
        setData('category_id', value);
        // You can also handle any additional logic here when the category is selected
    }

    const submit = (e) => {
        e.preventDefault();

        post('product-store', {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                
            },
        });
    }

    return (
        <AuthenticatedLayout header={t('create_product')} >
            <Head title={t('create_product')} />
            
            <div className="p-5 flex flex-col md:grid md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                    <InputLabel value={t('upload_image_thumbnail')} />
                    <Upload 
                        name="images_thumbnail"
                        beforeUpload={() => false}
                        showUploadList={true}
                        onChange={handlePhotoThumbnailSelected}
                    >
                        <Button size="sm">{t('upload_image')}</Button>
                    </Upload>
                </div>
                <div className="flex flex-col gap-2">
                    <InputLabel value={t('upload_product_image')} />
                    <Upload 
                        name="images"
                        beforeUpload={() => false}
                        showUploadList={true}
                        multiple
                        onChange={handlePhotoSelected}
                        fileList={data.images.map((file, index) => ({
                            uid: index.toString(),
                            name: file.name,
                            status: 'done',
                            url: URL.createObjectURL(file), // Optional: preview image
                        }))}
                    >
                        <Button size="sm">{t('upload_image')}</Button>
                    </Upload>
                </div>
                <div className="flex flex-col gap-2">
                    <InputLabel value={t('product_name')} />
                    <TextInput 
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('name', e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <InputLabel value={t('product_code')} />
                    <TextInput 
                        id="product_code"
                        type="text"
                        name="product_code"
                        value={data.product_code}
                        className="mt-1 block w-full"
                        onChange={(e) => setData('product_code', e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <InputLabel value={t('product_price')} />
                    <InputNumber
                        value={data.product_price}
                        onChange={(value) => setData('product_price', value)} 
                        size="large"
                        step="0.01"
                        precision={2}
                        prefix="NT$"
                        className="w-full"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <InputLabel value={t('category')} />
                    <Select 
                        onChange={handleSelectChange}
                        options={getCategory.map((category) => ({
                            value: category.id,
                            label: category.name,
                        }))}
                        loading={isLoading}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <InputLabel value={t('product_pv')} />
                    <InputNumber
                        value={data.product_pv}
                        onChange={(value) => setData('product_pv', value)} 
                        size="large"
                        step="0.01"
                        precision={2}
                        suffix="PV"
                        className="w-full"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <InputLabel value={t('product_max_kp')} />
                    <InputNumber
                        value={data.product_max_kp}
                        onChange={(value) => setData('product_max_kp', value)} 
                        size="large"
                        step="0.01"
                        precision={2}
                        suffix="KP"
                        className="w-full"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <InputLabel value={t('stock')} />
                    <InputNumber
                        value={data.stock}
                        onChange={(value) => setData('stock', value)} 
                        size="large"
                        step="1"
                        precision={0}
                        suffix={t('quantity')}
                        className="w-full"
                    />
                </div>
                <div className="flex flex-col gap-2 col-span-2 ">
                    <InputLabel value={t('description')} />
                    <TextArea 
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}       
                        rows={4}                       
                        placeholder=""    
                    />
                </div>
                <div className="flex flex-col gap-2 col-span-2 ">
                    <InputLabel value={t('instruction_desciption')} />
                    <TextArea 
                        value={data.instruction_desciption}
                        onChange={(e) => setData('instruction_desciption', e.target.value)}       
                        rows={4}                       
                        placeholder=""    
                    />
                </div>
                <div className="flex flex-col gap-2 col-span-2 ">
                    <InputLabel value={t('product_feature')} />
                    <TextArea 
                        value={data.product_feature}
                        onChange={(e) => setData('product_feature', e.target.value)}       
                        rows={4}                       
                        placeholder=""    
                    />
                </div>
                <div className="flex justify-end gap-2 col-span-2 w-full ">
                    <div className="flex w-full md:w-full md:max-w-20">
                        <Button size="md" className="w-full" onClick={submit}>{t('submit')} </Button>
                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}