import { createClient } from '@/common/utils/client';
import { Button } from 'flowbite-react';
import { useState } from 'react';
import { FaBold, FaItalic, FaStrikethrough, FaImage, FaAlignLeft, FaAlignCenter, FaAlignRight, FaAlignJustify } from 'react-icons/fa';

const MenuBar = ({ editor }: { editor: any }) => {
    const [imageURLs, setImageURLs] = useState<string[]>([]);

    const addImage = async () => {
        const supabase = await createClient();
        const fileInput = document.createElement('input');
        fileInput.type = 'file';
        fileInput.accept = 'image/*';

        fileInput.click();

        fileInput.onchange = async () => {
            const file = fileInput.files?.[0];
            if (!file) return;

            try {
            const filePath = `images/${Date.now()}_${file.name}`;

            const { error: uploadError } = await supabase.storage
                .from('portfolio')
                .upload(filePath, file, {
                cacheControl: '3600',
                upsert: false,
                });

            if (uploadError) {
                console.error('Error uploading image:', uploadError);
                return;
            }

            const { data } = supabase.storage.from('portfolio').getPublicUrl(filePath);
            const downloadURL = data.publicUrl;

            // Insert into editor + store URL
            editor.chain().focus().setImage({ src: downloadURL }).run();
            setImageURLs((prev) => [...prev, downloadURL]);
            } catch (error) {
            console.error('Error uploading image:', error);
            }
        };
    };

  if (!editor) {
    return null;
  }

 return (
    <div className="control-group">
      <div className="button-group flex flex-wrap justify-even gap-2 p-2 rounded-md"
        >
        {[
            { label: 'H1', action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(), active: editor.isActive('heading', { level: 1 }) },
            { label: 'H2', action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(), active: editor.isActive('heading', { level: 2 }) },
            { label: 'H3', action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(), active: editor.isActive('heading', { level: 3 }) },
            { label: 'Paragraph', action: () => editor.chain().focus().setParagraph().run(), active: editor.isActive('paragraph') },
            { icon: <FaBold />, action: () => editor.chain().focus().toggleBold().run(), active: editor.isActive('bold') },
            { icon: <FaItalic />, action: () => editor.chain().focus().toggleItalic().run(), active: editor.isActive('italic') },
            { icon: <FaStrikethrough />, action: () => editor.chain().focus().toggleStrike().run(), active: editor.isActive('strike') },
            { icon: <FaImage />, action: addImage, active: false },
            { label: 'Highlight', action: () => editor.chain().focus().toggleHighlight().run(), active: editor.isActive('highlight') },
            { icon: <FaAlignLeft />, action: () => editor.chain().focus().setTextAlign('left').run(), active: editor.isActive({ textAlign: 'left' }) },
            { icon: <FaAlignCenter />, action: () => editor.chain().focus().setTextAlign('center').run(), active: editor.isActive({ textAlign: 'center' }) },
            { icon: <FaAlignRight />, action: () => editor.chain().focus().setTextAlign('right').run(), active: editor.isActive({ textAlign: 'right' }) },
            { icon: <FaAlignJustify />, action: () => editor.chain().focus().setTextAlign('justify').run(), active: editor.isActive({ textAlign: 'justify' }) },
        ].map((btn, i) => (
            <Button
            key={i}
            onClick={btn.action}
            color={btn.active ? 'dark' : 'light'}
            className={`
                rounded-md border text-sm flex items-center gap-1
                ${btn.active
                ? 'bg-blue-500 text-white dark:bg-blue-400 dark:text-black border-blue-600 dark:border-blue-300'
                : 'bg-white dark:bg-[#1f1f1f] text-black dark:text-[#E4E6EB] hover:bg-gray-200 dark:hover:bg-[#2a2a2a] border-gray-300 dark:border-gray-700'}
            `}
            >
            {btn.label || btn.icon}
            </Button>
        ))}
        </div>
    </div>
  );
};

export default MenuBar;
