import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().optional(),
  addressLine1: z.string().min(1, "address is required"),
  city: z.string().min(1, "city is required"),
  country: z.string().min(1, "country is required"),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
};

const UserProfileForm = ({ onSave, isLoading }: Props) => {
  const form = useForm<UserFormData>({ resolver: zodResolver(formSchema) });

  return (
    <div className="p-5">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSave)}
          className="space-y-4 bg-gray-50 rounded-lg md:p-10"
        >
          <div>
            <h2 className="text-2xl font-bold">
              User Profile form
              <FormDescription>
                View and change your profile information here
              </FormDescription>
            </h2>
          </div>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Email </FormLabel>
                <FormControl>
                  <Input {...field} disabled className="bg-white" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel> Name </FormLabel>
                <FormControl>
                  <Input {...field} disabled className="bg-white" />
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex flex-col md:flex-row gap-4">
            <FormField
              control={form.control}
              name="addressLine1"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Address line 1 </FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-white" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> City </FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-white" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Country </FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-white" />
                  </FormControl>
                </FormItem>
              )}
            />
          </div>
          {isLoading ? (
            <LoadingButton />
          ) : (
            <Button type="submit" className="bg-orange-500">
              {" "}
              Submit
            </Button>
          )}
        </form>
      </Form>
    </div>
  );
};

export default UserProfileForm;
