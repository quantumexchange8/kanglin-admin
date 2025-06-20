import Button from "@/Components/Button";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import { useTranslation } from "react-i18next";

export default function ProductListing() {

    const { t } = useTranslation();

    const redirectCreateProduct = () => {
        window.location.href = route('create-product');
    }

    return (
        <AuthenticatedLayout header={t('product_listing')}>
            <Head title={t('product_listing')} />

            <div className="p-5 flex flex-col gap-5">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div></div>
                    <div>
                        <Button size="md" onClick={redirectCreateProduct}>Add Product</Button>
                    </div>
                </div>


            </div>
        </AuthenticatedLayout>
    )
}