import Button from "@/Components/Button";
import InputLabel from "@/Components/InputLabel";
import Modal from "@/Components/Modal";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Input } from 'antd';
import { EditIcon } from "@/Components/Icon/Outline";

export default function Category() {

    const [isAddCategoryDialogOpen, setIsAddCategoryDialogOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const { t, i18n } = useTranslation();
    const { TextArea } = Input;
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
        description: ''
    });

    const createCategoryDialog = () => {
        setIsAddCategoryDialogOpen(true);
    }
    const closeCategoryDialog = () => {
        setIsAddCategoryDialogOpen(false);
    }

    const createCategory = (e) => {
        e.preventDefault();

        post('category-store', {
            onSuccess: () => {
                reset();
                fetchCategories();
                closeCategoryDialog();
            },
            onError: () => {
                console.error(errors);
            }
        });
    }

    return (
        <AuthenticatedLayout header={t('category')} >
            <Head title={t('category')} />

            <div className="p-5 flex flex-col gap-5">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div></div>
                    <div>
                        <Button size="md" onClick={createCategoryDialog}>Add Category</Button>
                    </div>
                </div>

                {/* Content */}
                {
                    isLoading ? (
                        <>
                            loading...
                        </>
                    ) : (
                        <>
                            {
                                getCategory.length > 0 ? (
                                    <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid xl:grid-cols-4 gap-4">
                                        {
                                            getCategory.map((category, index) => (
                                                <div key={category.id} className="p-4 flex justify-between gap-3 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                                    <div className="w-full flex flex-col gap-3">
                                                        <div className="font-bold">{t('category')} {index + 1}</div>
                                                        <div>{category.name}</div>
                                                        <div className="text-sm text-gray-600 h-10">{category.description}</div>
                                                    </div>
                                                    <div>
                                                        <EditIcon />
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                ) : (
                                    <div>
                                        {t('no_category_found')}
                                    </div>
                                )
                            }
                        </>
                    )
                }
                <div>

                </div>
            </div>

            <Modal
                show={isAddCategoryDialogOpen}
                maxWidth='md'
                title={t('create_category')}
                onClose={closeCategoryDialog}
                footer={
                    <div className="flex items-center justify-end gap-4 w-full">
                        <Button variant="outlined" size="sm" onClick={closeCategoryDialog}>Cancel</Button>
                        <Button size="sm" onClick={createCategory}>Confirm</Button>
                    </div>
                }
            >
                <div className="py-3 px-6 flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                        <InputLabel value={t('category_name')} />
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
                        <InputLabel value={t('description')} />
                        <TextArea 
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}       
                            rows={4}                       
                            placeholder=""    
                        />
                    </div>
                </div>
            </Modal>
        </AuthenticatedLayout>
    )
}