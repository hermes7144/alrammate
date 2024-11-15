import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getRaces, saveRace } from '../api/database';
import { RaceProps } from '../types/RaceProps';

export default function useRaces() {
  const queryClient = useQueryClient();

  const racesQuery = useQuery({
    queryKey: ['races'],
    queryFn: () => getRaces()
  });

  const mutateRace = useMutation({
    mutationFn: (race: RaceProps) => saveRace(race),
    onSuccess: () => {queryClient.invalidateQueries({queryKey:['races']})} 
  })

  return { racesQuery, mutateRace};
}