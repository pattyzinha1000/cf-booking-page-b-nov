interface VideoEmbedProps {
  embedCode: string;
}

export const VideoEmbed = ({ embedCode }: VideoEmbedProps) => {
  return (
    <div className="max-w-4xl mx-auto mb-8 sm:mb-12 px-2 sm:px-0">
      <div 
        className="rounded-lg overflow-hidden shadow-lg"
        dangerouslySetInnerHTML={{ __html: embedCode }}
      />
    </div>
  );
};